import type { BlogPostFilteredPagedAndSortedResultRequestDto, BlogPostGetListInput } from './models';
import { RestService, Rest } from '@abp/ng.core';
import type { PagedResultDto } from '@abp/ng.core';
import { Injectable } from '@angular/core';
import type { BlogPostCommonDto } from '../../contents/models';
import type { CmsUserDto } from '../../users/models';

@Injectable({
  providedIn: 'root',
})
export class BlogPostPublicService {
  apiName = 'CmsKitPublic';
  

  delete = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, void>({
      method: 'DELETE',
      url: `/api/cms-kit-public/blog-posts/${id}`,
    },
    { apiName: this.apiName,...config });
  

  get = (blogSlug: string, blogPostSlug: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, BlogPostCommonDto>({
      method: 'GET',
      url: `/api/cms-kit-public/blog-posts/${blogSlug}/${blogPostSlug}`,
    },
    { apiName: this.apiName,...config });
  

  getAuthorHasBlogPost = (id: string, config?: Partial<Rest.Config>) =>
    this.restService.request<any, CmsUserDto>({
      method: 'GET',
      url: `/api/cms-kit-public/blog-posts/authors/${id}`,
    },
    { apiName: this.apiName,...config });
  

  getAuthorsHasBlogPosts = (input: BlogPostFilteredPagedAndSortedResultRequestDto, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<CmsUserDto>>({
      method: 'GET',
      url: '/api/cms-kit-public/blog-posts/authors',
      params: { filter: input.filter, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });
  

  getList = (blogSlug: string, input: BlogPostGetListInput, config?: Partial<Rest.Config>) =>
    this.restService.request<any, PagedResultDto<BlogPostCommonDto>>({
      method: 'GET',
      url: `/api/cms-kit-public/blog-posts/${blogSlug}`,
      params: { authorId: input.authorId, tagId: input.tagId, sorting: input.sorting, skipCount: input.skipCount, maxResultCount: input.maxResultCount },
    },
    { apiName: this.apiName,...config });

  constructor(private restService: RestService) {}
}
