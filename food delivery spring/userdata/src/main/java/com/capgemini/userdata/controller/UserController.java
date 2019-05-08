package com.capgemini.userdata.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.capgemini.userdata.entity.Users;
import com.capgemini.userdata.service.UserService;
import com.capgemini.userdata.service.impl.UserServiceImpl;


@CrossOrigin("*")
@RestController
@RequestMapping("/api")
public class UserController {

	@Autowired
	private UserService service;
	
	@PostMapping("/users")
	public Users regsiterAllDetails(@RequestBody Users user)
	{
		System.out.println("users"+user);
		Users userData=service.addAllDetails(user);
		
		return userData;
		
	}
	
	
}
