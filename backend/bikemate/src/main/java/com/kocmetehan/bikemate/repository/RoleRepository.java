package com.kocmetehan.bikemate.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kocmetehan.bikemate.model.ERole;
import com.kocmetehan.bikemate.model.Role;

public interface RoleRepository extends JpaRepository<Role, Integer> {
	Optional<Role> findByName(ERole name);

}
