package com.example.web_final_project.Service.impl;

import com.example.web_final_project.Entity.User;
import com.example.web_final_project.POJO.UserPojo;
import com.example.web_final_project.Repository.UserRepository;
import com.example.web_final_project.Service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class UserServiceImpl implements UserService {

    private final UserRepository userRepository;

    @Override
    public List<User> findAll() {
        List<User> users = userRepository.findAll();
        return userRepository.findAll();
    }

    @Override
    public void saveAndUpdate(UserPojo userPojo) {
        User user = new User();

        user.setId(userPojo.getId());
        user.setUsername(userPojo.getUsername());
        user.setPassword(userPojo.getPassword());
        user.setEmail(userPojo.getEmail());

        userRepository.save(user);
    }

    @Override
    public Optional<User> findById(Integer id) {
        User empData=userRepository.findById(id).get();


        return Optional.of(empData);
    }

    @Override
    public void deleteById(Integer id) {

    }
}
