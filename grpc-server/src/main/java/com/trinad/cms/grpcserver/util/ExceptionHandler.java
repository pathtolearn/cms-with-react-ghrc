package com.trinad.cms.grpcserver.util;

import io.grpc.Status;
import io.grpc.stub.StreamObserver;

// just a very basic exception handler
// need to think of a better alternative
// like intercepting errors and check at a single place throughout
// the application like @ControllerAdvice 
public class ExceptionHandler {
	public static <T> void throwException(StreamObserver<T> responseObserver, Exception e) {
		responseObserver.onError(Status.INTERNAL.withDescription(e.getMessage()).asRuntimeException());
	}
}
