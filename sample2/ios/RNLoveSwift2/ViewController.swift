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
    
    @IBOutlet weak var label: UILabel?
    @IBOutlet weak var reactHost: UIView?
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        RNBridge.mainViewController = self
        
        
        let jsCodeLocation = URL(string: "http://localhost:8081/index.bundle?platform=ios")
        let myData:NSDictionary = ["infos":
            [
                ["name":"Alex", "value":"42"],
                ["name":"Joel", "value":"10"]
            ]
        ]
        
        let rootView = RCTRootView(
            bundleURL: jsCodeLocation,
            moduleName: "RNLoveSwift2",
            initialProperties: myData as [NSObject : AnyObject],
            launchOptions: nil
        )
        
        rootView!.frame = (self.reactHost?.bounds)!
        
        self.reactHost!.addSubview(rootView!);
    }

    func writeInfo(val: String) -> Void {
        self.label!.text = val
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    

}

