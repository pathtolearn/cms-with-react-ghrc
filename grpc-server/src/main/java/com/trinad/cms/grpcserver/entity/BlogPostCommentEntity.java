package com.trinad.cms.grpcserver.entity;

import java.time.LocalDateTime;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "blog_post_comments")
public class BlogPostCommentEntity {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	@Column(name = "pb_com_id")
	private Long bpComId;

	@Column(name = "bp_id", nullable = false)
	private Long bpId;

	@Column(name = "comment", nullable = false)
	private String comment;

	@Column(name = "com_parent_id")
	private Long comParentId;

	@Column(name = "user_identity", nullable = false)
	private String userIdentity;

	@Column(name = "created_time", nullable = false)
	private LocalDateTime createdTime;

	@Column(name = "modified_time")
	private LocalDateTime modifiedTime;

	public Long getBpComId() {
		return bpComId;
	}

	public void setBpComId(Long bpComId) {
		this.bpComId = bpComId;
	}

	public Long getBpId() {
		return bpId;
	}

	public void setBpId(Long bpId) {
		this.bpId = bpId;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public Long getComParentId() {
		return comParentId;
	}

	public void setComParentId(Long comParentId) {
		this.comParentId = comParentId;
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
		return "BlogPostComment [bpComId=" + bpComId + ", bpId=" + bpId + ", comment=" + comment + ", comParentId="
				+ comParentId + ", userIdentity=" + userIdentity + ", createdTime=" + createdTime + ", modifiedTime="
				+ modifiedTime + "]";
	}

}
