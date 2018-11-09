//
//  RNBridge.swift
//  RNLoveSwift2
//
//  Created by Marco  on 09/11/2018.
//  Copyright © 2018 Marco. All rights reserved.
//

import Foundation

@objc(RNBridge)
class RNBridge: NSObject {
    
    override init() {
        super.init()
        RNBridge.instace = self
    }
    
    static var mainViewController: ViewController?
    
    static var instace:RNBridge?
    
    @objc(writeText:)
    public func writeText(val: String) -> Void {
        RNBridge.mainViewController!.writeInfo(val: val);
    }
    
    static func requiresMainQueueSetup() -> Bool {
        return true
    }
}
