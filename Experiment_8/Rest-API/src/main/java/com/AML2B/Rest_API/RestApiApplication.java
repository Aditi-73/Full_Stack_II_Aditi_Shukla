package com.AML2B.Rest_API;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.AutoConfigurationPackage;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;

@SpringBootApplication
@ComponentScan(basePackages = { "com.AML2B.Rest_API", "controller", "service", "config" })
@AutoConfigurationPackage(basePackages = { "com.AML2B.Rest_API", "controller", "service", "repository", "model", "config" })
@EnableJpaRepositories(basePackages = "repository")
public class RestApiApplication {

	public static void main(String[] args) {
		SpringApplication.run(RestApiApplication.class, args);
	}

}
