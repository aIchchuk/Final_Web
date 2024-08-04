package com.example.web_final_project.Controller;

import com.example.web_final_project.Entity.User;
import com.example.web_final_project.POJO.UserPojo;
import com.example.web_final_project.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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
}
