/**
 * @fileoverview gRPC-Web generated client stub for com.trinad.cms.grpcserver.service
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.com = {};
proto.com.trinad = {};
proto.com.trinad.cms = {};
proto.com.trinad.cms.grpcserver = {};
proto.com.trinad.cms.grpcserver.service = require('./CMSService_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.trinad.cms.grpcserver.service.BlogPostServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.trinad.cms.grpcserver.service.BlogPostServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.trinad.cms.grpcserver.service.BlogPostRequest,
 *   !proto.com.trinad.cms.grpcserver.service.SuccessAcknowlegement>}
 */
const methodDescriptor_BlogPostService_CreateBlogPost = new grpc.web.MethodDescriptor(
  '/com.trinad.cms.grpcserver.service.BlogPostService/CreateBlogPost',
  grpc.web.MethodType.UNARY,
  proto.com.trinad.cms.grpcserver.service.BlogPostRequest,
  proto.com.trinad.cms.grpcserver.service.SuccessAcknowlegement,
  /**
   * @param {!proto.com.trinad.cms.grpcserver.service.BlogPostRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.trinad.cms.grpcserver.service.SuccessAcknowlegement.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.trinad.cms.grpcserver.service.BlogPostRequest,
 *   !proto.com.trinad.cms.grpcserver.service.SuccessAcknowlegement>}
 */
const methodInfo_BlogPostService_CreateBlogPost = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.trinad.cms.grpcserver.service.SuccessAcknowlegement,
  /**
   * @param {!proto.com.trinad.cms.grpcserver.service.BlogPostRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.trinad.cms.grpcserver.service.SuccessAcknowlegement.deserializeBinary
);


/**
 * @param {!proto.com.trinad.cms.grpcserver.service.BlogPostRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.com.trinad.cms.grpcserver.service.SuccessAcknowlegement)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.trinad.cms.grpcserver.service.SuccessAcknowlegement>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.trinad.cms.grpcserver.service.BlogPostServiceClient.prototype.createBlogPost =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.trinad.cms.grpcserver.service.BlogPostService/CreateBlogPost',
      request,
      metadata || {},
      methodDescriptor_BlogPostService_CreateBlogPost,
      callback);
};


/**
 * @param {!proto.com.trinad.cms.grpcserver.service.BlogPostRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.trinad.cms.grpcserver.service.SuccessAcknowlegement>}
 *     A native promise that resolves to the response
 */
proto.com.trinad.cms.grpcserver.service.BlogPostServicePromiseClient.prototype.createBlogPost =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.trinad.cms.grpcserver.service.BlogPostService/CreateBlogPost',
      request,
      metadata || {},
      methodDescriptor_BlogPostService_CreateBlogPost);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.trinad.cms.grpcserver.service.BlogPostCommentRequest,
 *   !proto.com.trinad.cms.grpcserver.service.SuccessAcknowlegement>}
 */
const methodDescriptor_BlogPostService_CreateBlogPostComment = new grpc.web.MethodDescriptor(
  '/com.trinad.cms.grpcserver.service.BlogPostService/CreateBlogPostComment',
  grpc.web.MethodType.UNARY,
  proto.com.trinad.cms.grpcserver.service.BlogPostCommentRequest,
  proto.com.trinad.cms.grpcserver.service.SuccessAcknowlegement,
  /**
   * @param {!proto.com.trinad.cms.grpcserver.service.BlogPostCommentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.trinad.cms.grpcserver.service.SuccessAcknowlegement.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.trinad.cms.grpcserver.service.BlogPostCommentRequest,
 *   !proto.com.trinad.cms.grpcserver.service.SuccessAcknowlegement>}
 */
const methodInfo_BlogPostService_CreateBlogPostComment = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.trinad.cms.grpcserver.service.SuccessAcknowlegement,
  /**
   * @param {!proto.com.trinad.cms.grpcserver.service.BlogPostCommentRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.trinad.cms.grpcserver.service.SuccessAcknowlegement.deserializeBinary
);


/**
 * @param {!proto.com.trinad.cms.grpcserver.service.BlogPostCommentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.com.trinad.cms.grpcserver.service.SuccessAcknowlegement)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.trinad.cms.grpcserver.service.SuccessAcknowlegement>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.trinad.cms.grpcserver.service.BlogPostServiceClient.prototype.createBlogPostComment =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.trinad.cms.grpcserver.service.BlogPostService/CreateBlogPostComment',
      request,
      metadata || {},
      methodDescriptor_BlogPostService_CreateBlogPostComment,
      callback);
};


/**
 * @param {!proto.com.trinad.cms.grpcserver.service.BlogPostCommentRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.trinad.cms.grpcserver.service.SuccessAcknowlegement>}
 *     A native promise that resolves to the response
 */
proto.com.trinad.cms.grpcserver.service.BlogPostServicePromiseClient.prototype.createBlogPostComment =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.trinad.cms.grpcserver.service.BlogPostService/CreateBlogPostComment',
      request,
      metadata || {},
      methodDescriptor_BlogPostService_CreateBlogPostComment);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.trinad.cms.grpcserver.service.GetAllBlogPostsRequest,
 *   !proto.com.trinad.cms.grpcserver.service.BlogPosts>}
 */
const methodDescriptor_BlogPostService_GetAllBlogPosts = new grpc.web.MethodDescriptor(
  '/com.trinad.cms.grpcserver.service.BlogPostService/GetAllBlogPosts',
  grpc.web.MethodType.UNARY,
  proto.com.trinad.cms.grpcserver.service.GetAllBlogPostsRequest,
  proto.com.trinad.cms.grpcserver.service.BlogPosts,
  /**
   * @param {!proto.com.trinad.cms.grpcserver.service.GetAllBlogPostsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.trinad.cms.grpcserver.service.BlogPosts.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.trinad.cms.grpcserver.service.GetAllBlogPostsRequest,
 *   !proto.com.trinad.cms.grpcserver.service.BlogPosts>}
 */
const methodInfo_BlogPostService_GetAllBlogPosts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.trinad.cms.grpcserver.service.BlogPosts,
  /**
   * @param {!proto.com.trinad.cms.grpcserver.service.GetAllBlogPostsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.trinad.cms.grpcserver.service.BlogPosts.deserializeBinary
);


/**
 * @param {!proto.com.trinad.cms.grpcserver.service.GetAllBlogPostsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.com.trinad.cms.grpcserver.service.BlogPosts)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.trinad.cms.grpcserver.service.BlogPosts>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.trinad.cms.grpcserver.service.BlogPostServiceClient.prototype.getAllBlogPosts =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.trinad.cms.grpcserver.service.BlogPostService/GetAllBlogPosts',
      request,
      metadata || {},
      methodDescriptor_BlogPostService_GetAllBlogPosts,
      callback);
};


/**
 * @param {!proto.com.trinad.cms.grpcserver.service.GetAllBlogPostsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.trinad.cms.grpcserver.service.BlogPosts>}
 *     A native promise that resolves to the response
 */
proto.com.trinad.cms.grpcserver.service.BlogPostServicePromiseClient.prototype.getAllBlogPosts =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.trinad.cms.grpcserver.service.BlogPostService/GetAllBlogPosts',
      request,
      metadata || {},
      methodDescriptor_BlogPostService_GetAllBlogPosts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.trinad.cms.grpcserver.service.BlogPostCommentsRequest,
 *   !proto.com.trinad.cms.grpcserver.service.BlogPostComments>}
 */
const methodDescriptor_BlogPostService_GetAllCommentsByBlogPostId = new grpc.web.MethodDescriptor(
  '/com.trinad.cms.grpcserver.service.BlogPostService/GetAllCommentsByBlogPostId',
  grpc.web.MethodType.UNARY,
  proto.com.trinad.cms.grpcserver.service.BlogPostCommentsRequest,
  proto.com.trinad.cms.grpcserver.service.BlogPostComments,
  /**
   * @param {!proto.com.trinad.cms.grpcserver.service.BlogPostCommentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.trinad.cms.grpcserver.service.BlogPostComments.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.trinad.cms.grpcserver.service.BlogPostCommentsRequest,
 *   !proto.com.trinad.cms.grpcserver.service.BlogPostComments>}
 */
const methodInfo_BlogPostService_GetAllCommentsByBlogPostId = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.trinad.cms.grpcserver.service.BlogPostComments,
  /**
   * @param {!proto.com.trinad.cms.grpcserver.service.BlogPostCommentsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.trinad.cms.grpcserver.service.BlogPostComments.deserializeBinary
);


/**
 * @param {!proto.com.trinad.cms.grpcserver.service.BlogPostCommentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.com.trinad.cms.grpcserver.service.BlogPostComments)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.trinad.cms.grpcserver.service.BlogPostComments>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.trinad.cms.grpcserver.service.BlogPostServiceClient.prototype.getAllCommentsByBlogPostId =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.trinad.cms.grpcserver.service.BlogPostService/GetAllCommentsByBlogPostId',
      request,
      metadata || {},
      methodDescriptor_BlogPostService_GetAllCommentsByBlogPostId,
      callback);
};


/**
 * @param {!proto.com.trinad.cms.grpcserver.service.BlogPostCommentsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.trinad.cms.grpcserver.service.BlogPostComments>}
 *     A native promise that resolves to the response
 */
proto.com.trinad.cms.grpcserver.service.BlogPostServicePromiseClient.prototype.getAllCommentsByBlogPostId =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.trinad.cms.grpcserver.service.BlogPostService/GetAllCommentsByBlogPostId',
      request,
      metadata || {},
      methodDescriptor_BlogPostService_GetAllCommentsByBlogPostId);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.trinad.cms.grpcserver.service.UserServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.com.trinad.cms.grpcserver.service.UserServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.com.trinad.cms.grpcserver.service.UserRequest,
 *   !proto.com.trinad.cms.grpcserver.service.Empty>}
 */
const methodDescriptor_UserService_CheckAndCreateUser = new grpc.web.MethodDescriptor(
  '/com.trinad.cms.grpcserver.service.UserService/CheckAndCreateUser',
  grpc.web.MethodType.UNARY,
  proto.com.trinad.cms.grpcserver.service.UserRequest,
  proto.com.trinad.cms.grpcserver.service.Empty,
  /**
   * @param {!proto.com.trinad.cms.grpcserver.service.UserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.trinad.cms.grpcserver.service.Empty.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.com.trinad.cms.grpcserver.service.UserRequest,
 *   !proto.com.trinad.cms.grpcserver.service.Empty>}
 */
const methodInfo_UserService_CheckAndCreateUser = new grpc.web.AbstractClientBase.MethodInfo(
  proto.com.trinad.cms.grpcserver.service.Empty,
  /**
   * @param {!proto.com.trinad.cms.grpcserver.service.UserRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.com.trinad.cms.grpcserver.service.Empty.deserializeBinary
);


/**
 * @param {!proto.com.trinad.cms.grpcserver.service.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.com.trinad.cms.grpcserver.service.Empty)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.com.trinad.cms.grpcserver.service.Empty>|undefined}
 *     The XHR Node Readable Stream
 */
proto.com.trinad.cms.grpcserver.service.UserServiceClient.prototype.checkAndCreateUser =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/com.trinad.cms.grpcserver.service.UserService/CheckAndCreateUser',
      request,
      metadata || {},
      methodDescriptor_UserService_CheckAndCreateUser,
      callback);
};


/**
 * @param {!proto.com.trinad.cms.grpcserver.service.UserRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.com.trinad.cms.grpcserver.service.Empty>}
 *     A native promise that resolves to the response
 */
proto.com.trinad.cms.grpcserver.service.UserServicePromiseClient.prototype.checkAndCreateUser =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/com.trinad.cms.grpcserver.service.UserService/CheckAndCreateUser',
      request,
      metadata || {},
      methodDescriptor_UserService_CheckAndCreateUser);
};


module.exports = proto.com.trinad.cms.grpcserver.service;

