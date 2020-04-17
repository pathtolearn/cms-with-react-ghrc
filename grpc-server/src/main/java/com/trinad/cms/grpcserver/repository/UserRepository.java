package com.trinad.cms.grpcserver.repository;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.trinad.cms.grpcserver.entity.UserEntity;

public interface UserRepository extends CrudRepository<UserEntity, Long> {

	@Transactional(readOnly = true)
	@Query(value = "select * from users u where u.user_identity=:user_identity", nativeQuery = true)
	UserEntity findByUserIdentity(@Param("user_identity") String userIdentity);
}
