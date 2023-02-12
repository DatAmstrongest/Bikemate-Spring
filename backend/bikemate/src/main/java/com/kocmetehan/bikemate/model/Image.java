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
@Table(name="images")
public class Image {
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@Id
	@Column(name="image_id")
	private int id;
	
	private byte[] imageData;
	
	@ManyToOne
	@JoinColumn(name="post_id", nullable=false)
	Post post;
	
}
