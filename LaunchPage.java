import java.awt.event.ActionListener;
import javax.swing.JButton;
import javax.swing.JFrame;



public class LaunchPage implements ActionListener{
  
  JFrame frame = new Jframe();
  JButton  myButton = new JButton("New Window");
  
  LaunchPage(){

    myButtom.setBounds(100,160,200,40);
    myButtom.setFocusable(false);
    myButtom.addActionListener(this);

    frame.add(myButton);
    frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
    frame.setSize(420,420);
    frame.setLayout(null);
    frame.setVisible(true);
  
  }
  
}
