package com.trinad.cms.grpcserver.serviceImpl;

import org.lognet.springboot.grpc.GRpcService;
import org.springframework.beans.factory.annotation.Autowired;

import com.trinad.cms.grpcserver.entity.UserEntity;
import com.trinad.cms.grpcserver.repository.UserRepository;
import com.trinad.cms.grpcserver.service.Empty;
import com.trinad.cms.grpcserver.service.UserRequest;
import com.trinad.cms.grpcserver.service.UserServiceGrpc.UserServiceImplBase;
import com.trinad.cms.grpcserver.util.ExceptionHandler;

import io.grpc.stub.StreamObserver;

@GRpcService
public class UserServiceImpl extends UserServiceImplBase {

	@Autowired
	private UserRepository userRepository;

	@Override
	public void checkAndCreateUser(UserRequest request, StreamObserver<Empty> responseObserver) {
		try {
			responseObserver.onNext(checkAndSaveUser(request));
			responseObserver.onCompleted();
		} catch (Exception e) {
			ExceptionHandler.throwException(responseObserver, e);
		}
	}

	/**
	 * @param request
	 * @return
	 */
	private Empty checkAndSaveUser(UserRequest request) {
		try {
			String userIdentity = request.getUserIdentity();
			UserEntity foundUser = userRepository.findByUserIdentity(userIdentity);

			if (foundUser == null) {
				UserEntity newUser = new UserEntity();
				newUser.setName(request.getName());
				newUser.setGivenName(request.getGivenName());
				newUser.setFamilyName(request.getFamilyName());
				newUser.setNickName(request.getNickName());
				newUser.setEmail(request.getEmail());
				newUser.setPicture(request.getPicture());
				newUser.setUserIdentity(request.getUserIdentity());

				userRepository.save(newUser);
			}
			
			return Empty.getDefaultInstance();
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	}

}
