package com.kocmetehan.bikemate.model;

import java.util.Set;

import org.hibernate.validator.constraints.Length;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@Entity
@Table(name="posts")
public class Post {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Column(name="post_id")
	private int id;
	
	@Length(max = 150, message = "Your text cannot be longer than 150")
	private String description;
	
	private int likes;
	
	@ManyToOne
	@JoinColumn(name="user_id", nullable=false)
	User user;
	
	@OneToMany(mappedBy="post")
    private Set<Image> images;
	
	@OneToMany(mappedBy="post")
    private Set<Comment> comments;
	

}
