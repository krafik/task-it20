<?php

namespace App\Http\Controllers\Api\v1;
//namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\QuestInfo;
use App\Questionary;
use http\Env\Response;
use Illuminate\Http\Request;
use Validator;


class QuestController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Questionary::all();
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(),
            [
                'title' => ["required"],
            ]);
        if ($validator->fails()) {
            return
                [
                    "status" => false,
                    "erors" => $validator->messages()
                ];
        }

        $quest = Questionary::create([
            "title" => $request->title
        ]);

        return [
            "status" => true,
            "quest" => $quest
        ];
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
//        return Questionary::findOrFail($id);


//        $quests = QuestInfo::where('quest_id', '=', $id)->get();
        $quests = Questionary::find($id);
        if (!$quests) {
            return [
                    "status" => false,
                    "message" => "post not found"];
        }
        return $quests;
//       return response()->json($quests->all(),200);


    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param \Illuminate\Http\Request $request
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
