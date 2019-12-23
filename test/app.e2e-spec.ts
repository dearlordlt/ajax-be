import { AuthService } from './../src/auth/auth.service';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  const authService = {
    login: (req?) => {
      return { accessToken: 'asdasdasd' };
    },
  };

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(AuthService)
      .useValue(authService)
      .compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('(POST):/auth/login', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send('{ username: "admin", password: "root" }')
      .expect(401);
  });

  it('(GET):/auth/test/', () => {
    return request(app.getHttpServer())
      .get('/auth/test/')
      .expect(200)
      .expect('Hello World');
  });

  afterAll(() => {
    app.close();
  });
});
