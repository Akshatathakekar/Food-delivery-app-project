package com.capgemini.userdata.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.capgemini.userdata.entity.Users;

@Repository
public interface UserDao extends JpaRepository<Users, Long>{


}
