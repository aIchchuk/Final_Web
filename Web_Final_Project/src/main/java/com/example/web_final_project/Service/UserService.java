package com.example.web_final_project.Service;

import com.example.web_final_project.Entity.User;
import com.example.web_final_project.POJO.UserPojo;

import java.util.List;
import java.util.Optional;

public interface UserService {
    List<User> findAll();

    void saveAndUpdate(UserPojo userPojo);

    Optional<User> findById(Integer id);

    void deleteById(Integer id);
}
