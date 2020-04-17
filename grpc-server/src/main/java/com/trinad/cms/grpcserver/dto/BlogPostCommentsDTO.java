package com.trinad.cms.grpcserver.dto;

public interface BlogPostCommentsDTO {

	Long getBpComId();

	Long getBpId();

	String getCmt();

	Long getComParentId();

	String getUserIdentity();

	String getUserName();

	String getCreatedTime();

	String getModifiedTime();
}
