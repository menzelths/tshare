package de.qreator.tshare;

import java.util.Properties;

import io.vertx.core.Vertx;

public class Start {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Properties properties = System.getProperties();
		properties.setProperty("vertx.disableFileCaching", "true");
		Vertx vertx = Vertx.vertx();
		
		vertx.deployVerticle(VerticleClass.class.getName());



	}

}
