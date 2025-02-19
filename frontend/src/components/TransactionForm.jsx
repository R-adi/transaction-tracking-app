import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button} from './ui/button';
import { Label} from './ui/label'; 
import { Link } from 'react-router-dom';
import { Input} from './ui/input';  // Assuming shadcn/ui components


const schema = z.object({
  amount: z.number().positive({ message: 'Amount must be a positive number' }),
  date: z.string().min(1, { message: 'Date is required' }),
  description: z.string().min(1, { message: 'Description is required' }),
  category: z.string().min(1, { message: 'Category is required' }),
});

const TransactionForm = ({ onSubmit, initialData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: zodResolver(schema),
    defaultValues: initialData || {}, // Pre-fill the form with initialData
  });

  return (

    <div className='bg-white m-1 p-5 mt-4 rounded-[7px]'>



 <form
      onSubmit={handleSubmit((data) => {
        onSubmit(data);
        reset(); // Reset the form after submission
      })}
      className="space-y-4"
    >
      {/* Amount Field */}
      <div>
        <Label htmlFor="amount">Amount</Label>
        <Input
          {...register('amount', { valueAsNumber: true })}
          id="amount"
          type="number"
          placeholder="Enter amount"
        />
        {errors.amount && (
          <span className="text-red-500 text-sm">{errors.amount.message}</span>
        )}
      </div>

      {/* Date Field */}
      <div>
        <Label htmlFor="date">Date</Label>
        <Input
          {...register('date')}
          id="date"
          type="date"
          placeholder="Select date"
        />
        {errors.date && (
          <span className="text-red-500 text-sm">{errors.date.message}</span>
        )}
      </div>

      {/* Description Field */}
      <div>
        <Label htmlFor="description">Description</Label>
        <Input
          {...register('description')}
          id="description"
          type="text"
          placeholder="Enter description"
        />
        {errors.description && (
          <span className="text-red-500 text-sm">{errors.description.message}</span>
        )}
      </div>

      {/* Category Field */}
      <div>
        <Label htmlFor="category">Category</Label>
        <select {...register('category')} id="category">
          <option value="">Select a category</option>
          <option value="Food">Food</option>
          <option value="Rent">Rent</option>
          <option value="Entertainment">Entertainment</option>
          <option value="Transport">Transport</option>
          <option value="Utilities">Utilities</option>
        </select>

    

        {errors.category && (
          <span className="text-red-500 text-sm">{errors.category.message}</span>
        )}
      </div>

      <Button type="submit" className=" justify-center mb-3 font-bold bg-blue-500 w-full">
        {initialData ? 'Update Transaction' : 'Add Transaction'}
      </Button>
    </form>
    </div>

   
  );
};

export default TransactionForm;