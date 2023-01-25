package com.kocmetehan.bikemate;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication()
public class BikemateApplication {

	public static void main(String[] args) {
		SpringApplication.run(BikemateApplication.class, args);
	}

}
