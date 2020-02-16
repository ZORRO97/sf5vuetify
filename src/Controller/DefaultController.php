<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class DefaultController extends AbstractController
{
    /**
     * @Route("/", name="main")
     */
    public function index()
    {
        return $this->render('home.html.twig', [
            'controller_name' => 'DefaultController',
        ]);
    }

    /**
     * @Route("/essai", name="app_essai")
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function essai(){
        return $this->render('default/essai.html.twig');
    }
}
