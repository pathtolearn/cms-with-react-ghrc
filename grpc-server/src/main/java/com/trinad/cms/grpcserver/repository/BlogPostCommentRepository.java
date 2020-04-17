package com.trinad.cms.grpcserver.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import com.trinad.cms.grpcserver.dto.BlogPostCommentsDTO;
import com.trinad.cms.grpcserver.entity.BlogPostCommentEntity;

public interface BlogPostCommentRepository extends CrudRepository<BlogPostCommentEntity, Long> {

	@Transactional(readOnly = true)
	@Query(value = "select bpc.pb_com_id bpComId, bpc.bp_id bpId, bpc.comment cmt, bpc.com_parent_id comParentId, bpc.user_identity userIdentity, bpc.created_time createdTime, bpc.modified_time modifiedTime, u.name userName from blog_post_comments bpc join users u on u.user_identity=bpc.user_identity where bpc.bp_id=:bp_id", nativeQuery = true)
	List<BlogPostCommentsDTO> findAllBlogPostCommentsByBlogPostId(@Param("bp_id") Long bpId);
}
