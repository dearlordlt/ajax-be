import { AuthService } from './../src/auth/auth.service';
import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;
  const authService = {
    login: () => {
      return { accessToken: 'asdasdasd' };
    },
    validateUser: () => {
      return true;
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

  it('(POST):/auth/login', done => {
    return request(app.getHttpServer())
      .post('/auth/login')
      .send({ username: 'admin', password: 'root' })
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json')
      .expect(201)
      .expect({ accessToken: 'asdasdasd' })
      .end((err, res) => {
        if (err) {
          throw err;
        }
        done();
      });
  });

  it('(GET):/auth/test/', () => {
    return request(app.getHttpServer())
      .get('/auth/test/')
      .expect(200)
      .expect('Hello World');
  });

  afterAll(done => {
    app.close();
    done();
  });
});
