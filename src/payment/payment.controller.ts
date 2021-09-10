import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { hasRoles } from 'src/user/decorator/roles.decorator';
import { JwtAuthGuard } from 'src/user/guards/jwt-auth.guard';
import { RolesGuard } from 'src/user/guards/roles.guard';
import { UserIdAuthGuard } from 'src/user/guards/user-id-auth.guard';
import { CreatePaymentDTO } from './dto/create-payment.dto';
import { Payment } from './interfaces/payment.interface';
import { PaymentService } from './payment.service';

@Controller('payments')
export class PaymentController {
  constructor(private paymentService: PaymentService) { }

  @hasRoles(['admin', 'client'])
  @UseGuards(JwtAuthGuard, RolesGuard, UserIdAuthGuard)
  @Post(':id')
  async create(@Body() payment: CreatePaymentDTO): Promise<Payment> {
    return await this.paymentService.CreatePayment(payment);
  }

  @hasRoles(['admin'])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get()
  async getPayments(): Promise<Payment[]> {
    return await this.paymentService.getPayments();
  }

  @hasRoles(['admin'])
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Get(':id')
  async getPayment(@Param('id') id): Promise<Payment> {
    try {
      return await this.paymentService.getPayment(+id);
      console.log(await this.paymentService.getPayment(+id))
    }
    catch (error) {
      return error
    }
  }

  @hasRoles(['admin', 'client'])
  @UseGuards(JwtAuthGuard, RolesGuard, UserIdAuthGuard)
  @Get('client/:id')
  async getClientPayments(@Param('id') id): Promise<Payment[]> {
    return await this.paymentService.getClientPayment(+id);
  }

  @hasRoles(['admin', 'company'])
  @UseGuards(JwtAuthGuard, RolesGuard, UserIdAuthGuard)
  @Get('company/:id')
  async getCompanyPayments(@Param('id') id): Promise<Payment[]> {
    return await this.paymentService.getCompanyPayment(+id);
  }
}
