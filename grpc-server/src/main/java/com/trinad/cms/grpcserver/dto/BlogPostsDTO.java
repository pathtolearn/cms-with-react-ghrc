package com.trinad.cms.grpcserver.dto;

public interface BlogPostsDTO {
	Long getBpId();

	String getTitle();

	String getDescription();

	String getPictureName();

	String getPicture();

	String getUserIdentity();

	String getUserName();

	String getCreatedTime();

	String getModifiedTime();
}
