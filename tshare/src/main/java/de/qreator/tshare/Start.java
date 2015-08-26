package de.qreator.tshare;

import io.vertx.core.Vertx;

public class Start {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Vertx vertx = Vertx.vertx();
		vertx.deployVerticle(VerticleClass.class.getName());
		System.out.println("Tesgt232");

	}

}
