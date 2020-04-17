package com.trinad.cms.grpcserver.serviceImpl;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

import org.lognet.springboot.grpc.GRpcService;
import org.springframework.beans.factory.annotation.Autowired;

import com.trinad.cms.grpcserver.dto.BlogPostCommentsDTO;
import com.trinad.cms.grpcserver.dto.BlogPostsDTO;
import com.trinad.cms.grpcserver.entity.BlogPostCommentEntity;
import com.trinad.cms.grpcserver.entity.BlogPostEntity;
import com.trinad.cms.grpcserver.repository.BlogPostCommentRepository;
import com.trinad.cms.grpcserver.repository.BlogPostRepository;
import com.trinad.cms.grpcserver.service.BlogPost;
import com.trinad.cms.grpcserver.service.BlogPostComment;
import com.trinad.cms.grpcserver.service.BlogPostCommentRequest;
import com.trinad.cms.grpcserver.service.BlogPostComments;
import com.trinad.cms.grpcserver.service.BlogPostCommentsRequest;
import com.trinad.cms.grpcserver.service.BlogPostRequest;
import com.trinad.cms.grpcserver.service.BlogPostServiceGrpc.BlogPostServiceImplBase;
import com.trinad.cms.grpcserver.service.BlogPosts;
import com.trinad.cms.grpcserver.service.GetAllBlogPostsRequest;
import com.trinad.cms.grpcserver.service.SuccessAcknowlegement;
import com.trinad.cms.grpcserver.util.ExceptionHandler;

import io.grpc.stub.StreamObserver;

@GRpcService
public class BlogPostServiceImpl extends BlogPostServiceImplBase {

	@Autowired
	private BlogPostRepository blogPostRepository;

	@Autowired
	private BlogPostCommentRepository blogPostCommentRepository;

	@Override
	public void createBlogPost(BlogPostRequest request, StreamObserver<SuccessAcknowlegement> responseObserver) {
		try {
			responseObserver.onNext(saveOrUpdateBlogPost(request));
			responseObserver.onCompleted();
		} catch (Exception e) {
			ExceptionHandler.throwException(responseObserver, e);
		}
	}

	@Override
	public void createBlogPostComment(BlogPostCommentRequest request,
			StreamObserver<SuccessAcknowlegement> responseObserver) {
		try {
			responseObserver.onNext(saveOrUpdateBlogPostComment(request));
			responseObserver.onCompleted();
		} catch (Exception e) {
			ExceptionHandler.throwException(responseObserver, e);
		}
	}

	@Override
	public void getAllBlogPosts(GetAllBlogPostsRequest request, StreamObserver<BlogPosts> responseObserver) {
		try {
			responseObserver.onNext(getAllBlogPostsFromDB());
			responseObserver.onCompleted();
		} catch (Exception e) {
			ExceptionHandler.throwException(responseObserver, e);
		}
	}

	@Override
	public void getAllCommentsByBlogPostId(BlogPostCommentsRequest request,
			StreamObserver<BlogPostComments> responseObserver) {
		try {
			responseObserver.onNext(getAllBlogPostComments(request));
			responseObserver.onCompleted();
		} catch (Exception e) {
			ExceptionHandler.throwException(responseObserver, e);
		}
	}

	/**
	 * Save Or Update BlogPost
	 * 
	 * @param req
	 * @return
	 */
	public SuccessAcknowlegement saveOrUpdateBlogPost(BlogPostRequest req) {

		try {
			BlogPostEntity bp = new BlogPostEntity();
			bp.setTitle(req.getTitle());
			bp.setDescription(req.getDescription());
			bp.setPictureName(req.getPictureName());
			bp.setPicture(req.getPicture());
			bp.setUserIdentity(req.getUserIdentity());
			bp.setCreatedTime(LocalDateTime.now());

			blogPostRepository.save(bp);

			return SuccessAcknowlegement.newBuilder().setStatus("Success").build();
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	}

	/**
	 * @param req
	 * @return
	 */
	public SuccessAcknowlegement saveOrUpdateBlogPostComment(BlogPostCommentRequest req) {

		try {
			BlogPostCommentEntity bpc = new BlogPostCommentEntity();
			bpc.setBpComId(req.getBpComId());
			bpc.setBpId(req.getBpId());
			bpc.setComment(req.getComment());
			bpc.setCreatedTime(LocalDateTime.now());
			bpc.setUserIdentity(req.getUserIdentity());

			blogPostCommentRepository.save(bpc);

			return SuccessAcknowlegement.newBuilder().setStatus("Success").build();
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	}

	/**
	 * @return
	 */
	private BlogPosts getAllBlogPostsFromDB() {

		try {
			List<BlogPostsDTO> blogPosts = blogPostRepository.fetchAllBlogPosts();

			List<BlogPost> bpList = new ArrayList<>();

			for (BlogPostsDTO bpd : blogPosts) {
				BlogPostRequest bpr = BlogPostRequest.newBuilder().setBpId(bpd.getBpId()).setTitle(bpd.getTitle())
						.setDescription(bpd.getDescription()).setPictureName(bpd.getPictureName())
						.setPicture(bpd.getPicture()).setUserIdentity(bpd.getUserIdentity()).build();

				BlogPost bp = BlogPost.newBuilder().setBpr(bpr).setName(bpd.getUserName()).build();

				bpList.add(bp);
			}

			BlogPosts bps = BlogPosts.newBuilder().addAllBp(bpList).build();

			return bps;
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	}

	/**
	 * @param request
	 * @return
	 */
	private BlogPostComments getAllBlogPostComments(BlogPostCommentsRequest request) {
		try {
			Long bpId = request.getBpId();
			List<BlogPostCommentsDTO> comments = blogPostCommentRepository.findAllBlogPostCommentsByBlogPostId(bpId);

			List<BlogPostComment> bpcList = new ArrayList<>();

			for (BlogPostCommentsDTO bcd : comments) {
				BlogPostCommentRequest bpcr = BlogPostCommentRequest.newBuilder().setBpComId(bcd.getBpComId())
						.setBpId(bcd.getBpId()).setComment(bcd.getCmt()).setUserIdentity(bcd.getUserIdentity()).build();

				BlogPostComment bpc = BlogPostComment.newBuilder().setBpcr(bpcr).setName(bcd.getUserName())
						.setCreatedTime(bcd.getCreatedTime()).build();

				bpcList.add(bpc);
			}

			BlogPostComments bcs = BlogPostComments.newBuilder().addAllBpc(bpcList).build();

			return bcs;
		} catch (Exception e) {
			e.printStackTrace();
			throw e;
		}
	}
}
