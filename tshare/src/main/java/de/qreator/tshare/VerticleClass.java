package de.qreator.tshare;

import io.vertx.core.AbstractVerticle;
import io.vertx.core.Future;
import io.vertx.core.Vertx;
import io.vertx.core.http.HttpServer;
//import io.vertx.core.http.HttpServerResponse;
import io.vertx.ext.web.Router;
import io.vertx.ext.web.handler.StaticHandler;

public class VerticleClass extends AbstractVerticle {

	public  void start(Future<Void> fut) {
		// TODO Auto-generated method stub
		System.out.println("Es geht doch!");
		Vertx vertx = Vertx.vertx();
		HttpServer server = vertx.createHttpServer();

		Router router = Router.router(vertx);
		router.route("/static/*").handler(StaticHandler.create());
		/*
		router.route().handler(routingContext -> {

		  // This handler will be called for every request
		  HttpServerResponse response = routingContext.response();
		  response.putHeader("content-type", "text/plain");

		  // Write to the response and end it
		  response.end("Hello World from Vert.x-Web 2!");
		});*/

		server.requestHandler(router::accept).listen(8080, result -> {
	          if (result.succeeded()) {
	              fut.complete();
	            } else {
	              fut.fail(result.cause());
	            }
	          });
		
	}

}