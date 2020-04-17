import { BlogPostServiceClient, UserServiceClient } from "../CMSService_grpc_web_pb";
import { SERVER_URL } from "./constants";

export const blogPostServiceClient = new BlogPostServiceClient(SERVER_URL);
export const userServiceClient = new UserServiceClient(SERVER_URL);