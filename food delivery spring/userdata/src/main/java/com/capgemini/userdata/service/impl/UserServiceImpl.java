package com.capgemini.userdata.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.capgemini.userdata.dao.UserDao;
import com.capgemini.userdata.entity.Users;
import com.capgemini.userdata.service.UserService;

@Service
public class UserServiceImpl implements UserService{

	@Autowired
	private UserDao dao;
	
	@Override
	public Users addAllDetails(Users user) {
		
		return dao.save(user) ;
	}

}
