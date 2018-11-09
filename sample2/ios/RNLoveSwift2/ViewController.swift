//
//  ViewController.swift
//  RNLoveSwift2
//
//  Created by Marco  on 09/11/2018.
//  Copyright © 2018 Marco. All rights reserved.
//

import UIKit
import React

class ViewController: UIViewController {
    
    @IBOutlet weak var reactHost: UIView?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")
        let mockData:NSDictionary = ["scores":
            [
                ["name":"Alex", "value":"42"],
                ["name":"Joel", "value":"10"]
            ]
        ]
        
        let rootView = RCTRootView(
            bundleURL: jsCodeLocation,
            moduleName: "RNLoveSwift2",
            //initialProperties: mockData as [NSObject : AnyObject],
            initialProperties: nil,
            launchOptions: nil
        )
        //let vc = UIViewController()
        //vc.view = rootView
        
        rootView!.frame = (self.reactHost?.bounds)!
        rootView!.autoresizingMask = [.flexibleWidth, .flexibleHeight]
        self.reactHost?.autoresizesSubviews = true
        
        self.reactHost!.addSubview(rootView!);
        //let host = self.reactHost
        
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

