import { TestBed } from '@angular/core/testing';

import { ApiService } from './api.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { of } from 'rxjs';

describe('ApiService', () => {
  const httpClient: HttpClient = new HttpClient({} as HttpHandler);
  const getSpy = jest.spyOn(httpClient, 'get');
  const service: ApiService = new ApiService(httpClient);

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return an Promise containing an array', async () => {
    const testUrls = [
      'https://storage.googleapis.com/blog-post-content/8-break.webp',
      'https://storage.googleapis.com/blog-post-content/blogs-filtered.png',
      'https://storage.googleapis.com/blog-post-content/blogs-filtered.png',
      'https://storage.googleapis.com/blog-post-content/blogs.png',
      'https://storage.googleapis.com/blog-post-content/elk.webp',
      'https://storage.googleapis.com/blog-post-content/traffic-light.webp',
      'https://storage.googleapis.com/blog-post-content/elk.webp',
      'https://storage.googleapis.com/blog-post-content/go-routines-channel.webp',
      'https://storage.googleapis.com/blog-post-content/traffic-light.webp',
    ];
    getSpy.mockImplementationOnce(() => of(testUrls));
    const urls = await service.fetchURLs();
    expect(urls).toEqual(testUrls);
  });
});
