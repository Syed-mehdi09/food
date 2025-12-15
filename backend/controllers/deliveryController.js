import DeliveryPartner from '../models/deliveryModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const register = async (req, res) => {
  const { name, email, password, location } = req.body;
  try {
    const existingPartner = await DeliveryPartner.findOne({ email });
    if (existingPartner) {
      return res.status(400).json({ success: false, message: 'Email already exists' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newPartner = new DeliveryPartner({
      name,
      email,
      password: hashedPassword,
      location,
    });

    await newPartner.save();
    res.status(201).json({ success: true, message: 'Delivery partner registered successfully' });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error during registration' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const partner = await DeliveryPartner.findOne({ email });
    if (!partner) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    const isMatch = await bcrypt.compare(password, partner.password);
    if (!isMatch) {
      return res.status(400).json({ success: false, message: 'Invalid email or password' });
    }

    const token = jwt.sign({ id: partner._id }, process.env.JWT_SECRET, { expiresIn: '9d' });

    res.status(200).json({
      success: true,
      message: 'Login successful',
      token,
      partner: {
        id: partner._id,
        name: partner.name,
        email: partner.email,
        location: partner.location,
      },
    });
  } catch (error) {
    res.status(500).json({ success: false, message: 'Server error during login' });
  }
};
