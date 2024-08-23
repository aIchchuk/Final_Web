package com.example.web_final_project.Controller;

import com.example.web_final_project.Entity.User;
import com.example.web_final_project.POJO.UserPojo;
import com.example.web_final_project.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("users")
@RequiredArgsConstructor

public class UserController {
    private final UserService userService;


    @GetMapping
    public List<User> getAll() {
        return userService.findAll();
    }

    @PostMapping
    public void save(@RequestBody @ModelAttribute UserPojo userPojo) {
        userService.saveAndUpdate(userPojo);
    }

    @GetMapping("/{id}")
    public Optional<User> findById(@PathVariable Integer id){
        return userService.findById(id);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Integer id){
        userService.deleteById(id);
    }

    @PostMapping("/login")
    public ResponseEntity<UserLoginResponse> login(@RequestParam String username, @RequestParam String password) {
        User user = userService.findByUsername(username);
        if (user != null && user.getPassword().equals(password)) {
            return ResponseEntity.ok(new UserLoginResponse(user.getId()));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body(null);
        }
    }

    public static class UserLoginResponse {
        private Integer userId;

        public UserLoginResponse(Integer userId) {
            this.userId = userId;
        }

        public Integer getUserId() {
            return userId;
        }

        public void setUserId(Integer userId) {
            this.userId = userId;
        }
    }
}