<?php

namespace App\Http\Controllers;

use App\Subscriber;
use Illuminate\Http\Request;


class SubscriberController extends Controller
{

    public function store(Request $request)
    {
        $this->validate($request, [

            'first_name' => 'required|string',
            'last_name' => 'required|string',
            'email' => 'required|email'

        ]);

        $subscription = new Subscriber(request(['first_name', 'last_name', 'email']));
        $subscription->save();

        return ['message' => 'User Added'];

    }

}
