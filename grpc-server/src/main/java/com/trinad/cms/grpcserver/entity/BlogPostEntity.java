package com.trinad.cms.grpcserver.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "blog_posts")
public class BlogPostEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "bp_id")
	private Long bpId;

	@Column(name = "title", nullable = false)
	private String title;

	@Column(name = "description", nullable = false, length = 10000)
	private String description;

	@Column(name = "picture_name", nullable = false, length = 100)
	private String pictureName;

	@Column(name = "picture", nullable = false, length = 100000)
	private String picture;

	@Column(name = "user_identity", nullable = false)
	private String userIdentity;

	@Column(name = "created_time", nullable = false)
	private LocalDateTime createdTime;

	@Column(name = "modified_time")
	private LocalDateTime modifiedTime;

	public Long getBpId() {
		return bpId;
	}

	public void setBpId(Long bpId) {
		this.bpId = bpId;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getPictureName() {
		return pictureName;
	}

	public void setPictureName(String pictureName) {
		this.pictureName = pictureName;
	}

	public String getPicture() {
		return picture;
	}

	public void setPicture(String picture) {
		this.picture = picture;
	}

	public String getUserIdentity() {
		return userIdentity;
	}

	public void setUserIdentity(String userIdentity) {
		this.userIdentity = userIdentity;
	}

	public LocalDateTime getCreatedTime() {
		return createdTime;
	}

	public void setCreatedTime(LocalDateTime createdTime) {
		this.createdTime = createdTime;
	}

	public LocalDateTime getModifiedTime() {
		return modifiedTime;
	}

	public void setModifiedTime(LocalDateTime modifiedTime) {
		this.modifiedTime = modifiedTime;
	}

	@Override
	public String toString() {
		return "BlogPost [bpId=" + bpId + ", title=" + title + ", description=" + description + ", pictureName="
				+ pictureName + ", picture=" + picture + ", userIdentity=" + userIdentity + ", createdTime="
				+ createdTime + ", modifiedTime=" + modifiedTime + "]";
	}

}
