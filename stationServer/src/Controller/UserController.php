<?php

namespace App\Controller;

use App\Entity\User;
use Doctrine\Persistence\ManagerRegistry;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasher;
use Symfony\Component\PasswordHasher\Hasher\UserPasswordHasherInterface;
use Symfony\Component\Routing\Attribute\Route;
use Symfony\Component\Security\Http\Attribute\CurrentUser;

class UserController extends AbstractController
{
    //function to verify user email and existence  for test prupose
    #[Route('/users/verify', name: 'users/verify', methods: "Post")]
    public function verifyUser(Request $request, ManagerRegistry $doctrine): Response
    {
        $repository = $doctrine->getRepository(User::class);

        // Get data from the request
        $data = json_decode($request->getContent(), true);

        // Check if the email already exists
        $existingUser = $repository->findOneBy(['email' => $data['email']]);
        if ($existingUser) {
            return $this->json(['Email already exists'], Response::HTTP_CONFLICT);
        }

        return $this->json(["user doesnt not exist"]);
    }
    //function to create a new user and add him to data base
    #[Route('/users', name: "add_users", methods: "Post")]
    public function addUser(Request $request, ManagerRegistry $doctrine, UserPasswordHasherInterface $passwordHasher): Response
    {
        $repository = $doctrine->getRepository(User::class);
        //get data from user
        $data = json_decode($request->getContent(), true);
        // Check if the email already exists
        $existingUser = $repository->findOneBy(['email' => $data['email']]);
        if ($existingUser) {
            return $this->json(['Email already exists'], Response::HTTP_CONFLICT);
        }
        // add user to database
        $user = new User($passwordHasher);
        $user->setEmail($data['email']);
        $user->setName($data['name']);
        $user->setPassword($data['password']);
        $user->setRoles(["client"]);
        $entityManger = $doctrine->getManager();
        $entityManger->persist($user);
        $entityManger->flush();

        return $this->json(['user added succesfully ']);
    }
    //function to get 
    #[Route("/users", name: "get_users", methods: "Get")]
    public function getUsers(Request $request, ManagerRegistry $doctrine, #[CurrentUser] User $user): Response
    {
        if (null == $user) {
            return $this->json([
                'invalid credentials',
            ], Response::HTTP_UNAUTHORIZED);
            # code...
        }

        $repository = $doctrine->getRepository(User::class);
        $users = $repository->findAll();
        return $this->json($users);
    }

    #[Route("/user", name: "get_user", methods: "GET")]
    public function getUserData(#[CurrentUser] User $user): JsonResponse
    {
        if (null == $user) {
            return $this->json([
                'invalid credentials',
            ], Response::HTTP_UNAUTHORIZED);
            # code...
        }

        // Serialize user data to send back in the response
        $userData = [
            'id' => $user->getId(),
            'email' => $user->getEmail(),
            'name' => $user->getName(),
            'roles' => $user->getRoles(), // Assuming roles are stored as an array
            // Include any other relevant user information
        ];

        return $this->json($userData);
    }
}