import { app } from "@/app";
import { prisma } from "@/lib/prisma";
import { PublicUserSchema } from "@/modules/user/user.schemas";
import request from "supertest";
import { z } from "zod";
import {
	clearDatabase,
	createAuthenticatedUser,
	createTestUser,
} from "../../../prisma/test-utils";
import { sanitizeSchema } from "../../../scripts/swagger";

describe("User Routes", () => {
	beforeEach(async () => {
		await clearDatabase();
	});

	describe("GET /user (Listar Usuários)", () => {
		test("User deve conseguir listar todos os usuários", async () => {
			const { token } = await createAuthenticatedUser();

			const res = await request(app)
				.get("/user")
				.set("Authorization", `Bearer ${token}`);

			expect(res.status).toBe(200);

			const publicUserArraySchema = z.array(sanitizeSchema(PublicUserSchema));

			const parseResult = publicUserArraySchema.safeParse(res.body);

			if (!parseResult.success) {
				console.error(parseResult.error.issues);
			}

			expect(parseResult.success).toBe(true);
		});

		test("Não deve listar usuários sem token (Unauthorized)", async () => {
			const res = await request(app).get("/user");

			expect(res.status).toBe(401);
		});
	});

	describe("PUT /user/:id (Atualizar Usuário)", () => {
		test("USER deve conseguir atualizar seus próprios dados", async () => {
			const { user, token } = await createAuthenticatedUser();
			const newName = "Novo Nome";

			const res = await request(app)
				.put(`/user/${user.id}`)
				.set("Authorization", `Bearer ${token}`)
				.send({ name: newName });

			expect(res.status).toBe(200);
			expect(res.body.name).toBe(newName);
		});
	});

	describe("DELETE /user/:id (Deletar Usuário)", () => {
		test("User deve conseguir deletar a conta de qualquer usuário", async () => {
			const { token: adminToken } =
				await createAuthenticatedUser("admin@gmail.com");
			const user = await createTestUser();

			const res = await request(app)
				.delete(`/user/${user.id}`)
				.set("Authorization", `Bearer ${adminToken}`);

			expect(res.status).toBe(204);

			const userInDb = await prisma.user.findUnique({
				where: { id: user.id },
			});
			expect(userInDb).toBeNull();
		});

		test("Não deve deletar sem um token (Unauthorized)", async () => {
			const { user } = await createAuthenticatedUser();

			const res = await request(app).delete(`/user/${user.id}`);

			expect(res.status).toBe(401);
		});

		// test("Deve retornar 404 ao tentar deletar um usuário que não existe", async () => {
		// 	const { token } = await createAuthenticatedUser();
		// 	const fakeId = "fake_id_132";
		//
		// 	const res = await request(app)
		// 		.delete(`/user/${fakeId}`)
		// 		.set("Authorization", `Bearer ${token}`);
		//
		// 	expect(res.status).toBe(404);
		// });
	});
});
