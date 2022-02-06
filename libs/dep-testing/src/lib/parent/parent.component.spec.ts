import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComponent } from './parent.component';
import { ApiService } from '../service/api.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import SpyInstance = jest.SpyInstance;

describe('ParentComponent', () => {
  let component: ParentComponent;
  let fixture: ComponentFixture<ParentComponent>;
  let apiService: ApiService;

  let fetchUrlsSpy: SpyInstance;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ParentComponent],
      imports: [HttpClientTestingModule],
      providers: [ApiService],
    }).compileComponents();
    apiService = TestBed.inject(ApiService);
  });

  beforeEach(() => {
    fetchUrlsSpy = jest.spyOn(apiService, 'fetchURLs');
    fixture = TestBed.createComponent(ParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should set a set of URLs', async () => {
    fetchUrlsSpy.mockResolvedValue([
      'https://storage.googleapis.com/blog-post-content/8-break.webp',
      'https://storage.googleapis.com/blog-post-content/blogs-filtered.png',
      'https://storage.googleapis.com/blog-post-content/blogs-filtered.png',
      'https://storage.googleapis.com/blog-post-content/blogs.png',
      'https://storage.googleapis.com/blog-post-content/elk.webp',
      'https://storage.googleapis.com/blog-post-content/traffic-light.webp',
      'https://storage.googleapis.com/blog-post-content/elk.webp',
      'https://storage.googleapis.com/blog-post-content/go-routines-channel.webp',
      'https://storage.googleapis.com/blog-post-content/traffic-light.webp',
    ]);

    await component.fetchUrls(new Event(''));
    const urlList = component.uniqueUrls;
    expect(urlList.size).toBe(6);
  });
});
