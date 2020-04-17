package com.trinad.cms.grpcserver.config;

import java.time.Instant;

import org.lognet.springboot.grpc.GRpcGlobalInterceptor;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import io.grpc.Metadata;
import io.grpc.ServerCall;
import io.grpc.ServerCallHandler;
import io.grpc.ServerInterceptor;

@Configuration
public class AppConfig {
	private static final Logger LOGGER = LoggerFactory.getLogger(AppConfig.class);

	@Bean
	@GRpcGlobalInterceptor
	public ServerInterceptor globalInterceptor() {
		return new ServerInterceptor() {
			@Override
			public <ReqT, RespT> ServerCall.Listener<ReqT> interceptCall(ServerCall<ReqT, RespT> call, Metadata headers,
					ServerCallHandler<ReqT, RespT> next) {

				LOGGER.info("GRPC call at: {}", Instant.now());
				LOGGER.info(call.getMethodDescriptor().getFullMethodName());
				LOGGER.info(call.getMethodDescriptor().getFullMethodName());

				return next.startCall(call, headers);
			}
		};
	}
}