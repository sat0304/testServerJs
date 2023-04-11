import request from 'supertest'
import { AppModule } from 'src/app.module'

describe('/users', () => {
    it('returnEmptyArray', async () => {
        await request(AppModule).get('/users').expect(200, [])
    })
    
})