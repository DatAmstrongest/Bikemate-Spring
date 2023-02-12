package com.kocmetehan.bikemate.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.kocmetehan.bikemate.model.Comment;

public interface CommentRepository extends JpaRepository<Comment, Integer> {
	List<Comment> findByPostId(Long postId);
	

}
