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

  it('(POST)/auth/login', () => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ username: 'admin', password: 'admin' })
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .expect({ accessToken: 'asdasdasd' });
  });

  afterAll(() => {
    app.close();
  });
});
