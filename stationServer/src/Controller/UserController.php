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

class UserController extends AbstractController
{
    //function to verify user email for firest react registration form
    #[Route('/users/verify', name: 'users/verify')]
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

    #[Route('/users', name: "users")]
    public function addUser(Request $request, ManagerRegistry $doctrine, UserPasswordHasherInterface $passwordHasher): Response
    {
        $repository = $doctrine->getRepository(User::class);
        //get data from user
        $data = json_decode($request->getContent(), true);
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
}
