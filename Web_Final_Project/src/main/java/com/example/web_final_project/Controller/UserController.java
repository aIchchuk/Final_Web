package com.example.web_final_project.Controller;

import com.example.web_final_project.Entity.User;
import com.example.web_final_project.POJO.UserPojo;
import com.example.web_final_project.Service.UserService;
import lombok.RequiredArgsConstructor;
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
}
