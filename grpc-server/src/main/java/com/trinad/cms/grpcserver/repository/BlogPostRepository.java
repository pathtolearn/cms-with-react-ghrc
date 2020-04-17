package com.trinad.cms.grpcserver.repository;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.transaction.annotation.Transactional;

import com.trinad.cms.grpcserver.dto.BlogPostsDTO;
import com.trinad.cms.grpcserver.entity.BlogPostEntity;

public interface BlogPostRepository extends CrudRepository<BlogPostEntity, Long> {

	@Transactional(readOnly = true)
	@Query(value = "select bp.bp_id bpId, bp.title title, bp.description description, bp.picture_name pictureName, bp.picture picture, bp.user_identity userIdentity, u.name userName, bp.created_time createdTime, bp.modified_time modifiedTime from blog_posts bp join users u on u.user_identity=bp.user_identity order by bp.bp_id desc", nativeQuery = true)
	List<BlogPostsDTO> fetchAllBlogPosts();

}
