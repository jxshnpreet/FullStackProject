package com.example.FullStackProject.Repository;

import com.example.FullStackProject.Model.User;
import org.springframework.data.repository.CrudRepository;

public interface FormRepository extends CrudRepository<User,String> {
}

