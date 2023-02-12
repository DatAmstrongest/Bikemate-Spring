package com.kocmetehan.bikemate.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@Entity
@Table(name="comments")
public class Comment {
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Id
	@Column(name="comment_id")
	private int id;
	
	private String comment;
	
	private int likes;
	
	@ManyToOne
	@JoinColumn(name="post_id", nullable=false)
	Post post;
	
	@ManyToOne
	@JoinColumn(name="user_id", nullable=false)
	User user;
}
