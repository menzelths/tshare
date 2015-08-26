package de.qreator.tshare;

import io.vertx.core.Vertx;

public class Start {

	public static void main(String[] args) {
		// TODO Auto-generated method stub
		Vertx vertx = Vertx.vertx();
		vertx.deployVerticle(VerticleClass.class.getName());
<<<<<<< HEAD
		System.out.println("Tesgt2324568");
=======
		System.out.println("Tesgt2324567");
>>>>>>> refs/remotes/origin/master

	}

}
