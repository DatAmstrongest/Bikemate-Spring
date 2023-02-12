package com.kocmetehan.bikemate.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kocmetehan.bikemate.model.Post;

public interface PostRepository extends JpaRepository<Post, Integer> {
	List<Post>findByUserId(int userId);

}
