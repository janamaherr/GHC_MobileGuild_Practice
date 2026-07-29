// Task: Use Copilot to refactor this UIKit code to SwiftUI.
import UIKit

class LegacyViewController: UIViewController {
    override func viewDidLoad() {
        super.viewDidLoad()
        let label = UILabel()
        label.text = "Hello UIKit"
        label.textAlignment = .center
        label.frame = view.bounds
        view.addSubview(label)
    }
}